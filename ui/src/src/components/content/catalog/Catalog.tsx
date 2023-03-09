import React, { useEffect, useState } from 'react';
import '../../../styles/catalog.css';
import { DataNode } from 'antd/es/tree';
import ServiceTree from './components/ServiceTree';
import ServiceProvider from './components/ServiceProvider';
import { getServiceVendorData } from '../../../xpanse-api/service-vendor/api';
import { BankOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { serviceVendorApi } from '../../../xpanse-api/xpanseRestApiClient';

function Catalog(): JSX.Element {
    const [key, setKey] = useState<string>('');
    const [treeData, setTreeData] = useState<DataNode[]>([]);
    const [cloudProvider, setCloudProvider] = useState<any[]>([]);
    const location = useLocation();

    // useEffect(() => {
    //     const path = location.hash.split('#')[1];
    //     console.log('path:', path);
    //     serviceVendorApi.listRegisteredServicesTree(path).then((rsp) => {
    //         const data = rsp;
    //         console.log('data: ', data);
    //         setCloudProvider(data);
    //         let tData: DataNode[] = [];
    //         data.forEach((service) => {
    //             let dn: DataNode = {
    //                 title: service.name,
    //                 key: service.name,
    //                 children: [],
    //             };
    //             const versionData = service.versions;
    //             service.versions.forEach((v) => {
    //                 dn.children!.push({
    //                     title: v.version,
    //                     key: service.name + '@' + v.version,
    //                 });
    //             });
    //             tData.push(dn);
    //         });
    //         setTreeData(tData);
    //     });
    // }, [location.hash]);

    useEffect(() => {
        const path = location.hash.split('#')[1];
        console.log('path:', path);
        getServiceVendorData(path).then((rsp) => {
            const data = rsp.data.data;
            console.log('data: ', data);
            setCloudProvider(data);
            let tData: DataNode[] = [];
            data.forEach((service) => {
                let dn: DataNode = {
                    title: service.name,
                    key: service.name,
                    children: [],
                };
                service.versionList.forEach((v) => {
                    dn.children!.push({
                        title: v.version,
                        key: service.name + '@' + v.version,
                    });
                });
                tData.push(dn);
            });
            setTreeData(tData);
        });
    }, [location.hash]);

    return (
        <div className={'catalog-middleware'}>
            <div className='container'>
                <div className='left-class'>
                    <div className='left-title-class'>
                        <BankOutlined />
                        &ensp;Service Tree
                    </div>
                    <ServiceTree treeData={treeData} setKey={setKey} />
                </div>
                <div className='middle-class'></div>
                <div className='right-class'>
                    <div className='left-title-class'>Cloud Provider</div>
                    <ServiceProvider cloudProvider={cloudProvider} serviceName={key} />
                </div>
            </div>
        </div>
    );
}

export default Catalog;
