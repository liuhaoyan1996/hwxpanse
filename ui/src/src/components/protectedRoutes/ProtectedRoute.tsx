/*
 * SPDX-License-Identifier: Apache-2.0
 * SPDX-FileCopyrightText: Huawei Inc.
 */

import { Navigate, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import LayoutFooter from '../layouts/footer/LayoutFooter';
import LayoutHeader from '../layouts/header/LayoutHeader';
import LayoutSider from '../layouts/sider/LayoutSider';
import { isAuthenticatedKey, loginPageRoute } from '../utils/constants';

interface ProtectedRouteProperties {
    children: JSX.Element;
}

function Protected(protectedRouteProperties: ProtectedRouteProperties): JSX.Element {
    const location = useLocation();
    if (
        !localStorage.getItem(isAuthenticatedKey) ||
        localStorage.getItem(isAuthenticatedKey)?.toLowerCase() === 'false'
    ) {
        return <Navigate to={loginPageRoute} replace={true} state={{ from: location }} />;
    }
    return (
        <Layout className='layout' hasSider={true}>
            <LayoutSider />
            <Layout>
                <LayoutHeader />
                <div style={{ height: '24px' }}></div>
                <Layout.Content className='site-layout'>
                    <div className='site-layout-background'>{protectedRouteProperties.children}</div>
                </Layout.Content>
                <div className='boot-page-tail'>
                    <LayoutFooter />
                </div>
            </Layout>
        </Layout>
    );
}

export default Protected;
