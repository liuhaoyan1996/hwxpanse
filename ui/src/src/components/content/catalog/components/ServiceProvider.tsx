import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import ServiceDetail from './ServiceDetail';
import { useEmotionCss } from '@ant-design/use-emotion-css';

let lastServiceName: string = '';

function ServiceProvider({
    cloudProvider,
    serviceName,
}: {
    cloudProvider: ServiceVendor.Service[];
    serviceName: string;
}): JSX.Element {
    const [activeKey, setActiveKey] = useState<string>('');
    const [serviceDetails, setServiceDetails] = useState<ServiceVendor.CloudProviderDetails>({});
    const [serviceRegions, setServiceRegions] = useState<string>('');

    const mapper: Map<string, ServiceVendor.CloudProviderDetails> = new Map<
        string,
        ServiceVendor.CloudProviderDetails
    >();
    const regionMapper: Map<string, string[]> = new Map<string, string[]>();
    const [name, version] = serviceName.split('@');

    const items = cloudProvider
        .filter((service) => service.name === name)
        .flatMap((service) => service.versionList)
        .filter((v) => v.version === version)
        .flatMap((v) => {
            return v.cloudProviderList.map((cloudProvider: any) => {
                const key = serviceName + '@' + cloudProvider.name;
                mapper.set(key, cloudProvider.details);
                regionMapper.set(key, cloudProvider.region);
                return {
                    label: cloudProvider.name,
                    key: cloudProvider.name,
                    children: [],
                };
            });
        });

    useEffect(() => {
        if (items.length > 0 && lastServiceName !== serviceName) {
            const key = serviceName + '@' + items[0].key;
            const details = mapper.get(key);
            if (details) {
                setServiceDetails(details);
            }
            const regions = regionMapper.get(key);
            if (regions) {
                setServiceRegions(regions.join(','));
            }
            setActiveKey(items[0].key);
        }
        lastServiceName = serviceName;
    }, [items]);

    const onChange = (key: string) => {
        setActiveKey(key);
        const mk = serviceName + '@' + key;
        const regions = regionMapper.get(mk);
        const details = mapper.get(mk);
        if (details) {
            setServiceDetails(details);
        }
        if (regions) {
            setServiceRegions(regions.join(','));
        }
    };
    const tabClassName = useEmotionCss(() => {
        return {
            '.ant-tabs-tab-btn': {
                fontSize: '14px',
                fontWeight: 'bold',
            },
        };
    });
    return (
        <>
            {serviceName.length > 0 ? (
                <>
                    <Tabs items={items} onChange={onChange} activeKey={activeKey} className={tabClassName} />
                    <ServiceDetail serviceDetails={serviceDetails} serviceRegions={serviceRegions} />
                </>
            ) : (
                <></>
            )}
        </>
    );
}

export default ServiceProvider;
