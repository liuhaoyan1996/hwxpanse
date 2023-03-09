import React from 'react';
import { Descriptions, Divider } from 'antd';
import { CloudUploadOutlined, InfoCircleOutlined } from '@ant-design/icons';

function ServiceDetail({
    serviceDetails,
    serviceRegions,
}: {
    serviceDetails: ServiceVendor.CloudProviderDetails;
    serviceRegions: string;
}): JSX.Element {
    return (
        <>
            <div>
                <h3>
                    <CloudUploadOutlined />
                    &ensp;Avalible Regions
                </h3>
                <p>{serviceRegions}</p>
                <Divider />
            </div>
            <h3>
                <InfoCircleOutlined />
                &ensp;Basic Informations
            </h3>
            <Descriptions bordered column={1}>
                <Descriptions.Item label='Property' labelStyle={{ width: '230px' }}>
                    Information
                </Descriptions.Item>
                <Descriptions.Item label='Category'>{serviceDetails.category}</Descriptions.Item>
                <Descriptions.Item label='Provider'>{serviceDetails.provider}</Descriptions.Item>
                <Descriptions.Item label='Service Version'>{serviceDetails.serviceVersion}</Descriptions.Item>
                <Descriptions.Item label='Billing Mode'>{serviceDetails.billingMode}</Descriptions.Item>
                <Descriptions.Item label='Regular Pricing'>{serviceDetails.regularPricing}</Descriptions.Item>
                <Descriptions.Item label='Register Time'>{serviceDetails.registerTime}</Descriptions.Item>
                <Descriptions.Item label='Update Time'>{serviceDetails.updateTime}</Descriptions.Item>
                <Descriptions.Item label='Status'>{serviceDetails.status}</Descriptions.Item>
                <Descriptions.Item label='Flavors'>{serviceDetails.flavors}</Descriptions.Item>
            </Descriptions>
        </>
    );
}

export default ServiceDetail;
