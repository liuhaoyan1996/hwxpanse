/*
 * SPDX-License-Identifier: Apache-2.0
 * SPDX-FileCopyrightText: Huawei Inc.
 */

import {Image, Menu, Layout, MenuProps} from 'antd';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {homePageRoute} from '../../utils/constants';
import {useNavigate} from 'react-router-dom';
import {getCategoryList, getServiceVendorData} from "../../../xpanse-api/service-vendor/api";
import {ItemType} from "antd/es/menu/hooks/useItems";

const mapper = {
  ai: 'AI',
  compute: 'Compute',
  mediaservice: 'MediaService',
  middleware: 'MiddleWare',
  database: 'Database',
  container: 'Container',
  storage: 'Storage',
  network: 'Network',
  security: 'Security',
  others: 'Others',
};


function LayoutSider(): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);
  const [items, setItems] = useState<ItemType[]>([]);
  const navigate = useNavigate();
  const onSelected = function (cfg: any) {
    navigate(cfg.key);
  }

  const onClicked = function (cfg: any) {
    navigate(cfg.key);
  }

  useEffect(() => {
    getCategoryList()
    .then(rsp => {
      const data = rsp.data.data;
      console.log(data)
      const items = data.map(subMenu => {
        return {
          // key: '/' + (mapper[subMenu] || subMenu),
          key: '/middleware#' + subMenu,
          label: mapper[subMenu] || subMenu,
        };
      });
      setItems([{
        key: "/catalog",
        label: "Catalog",
        children: items,
      }]);
    });
  }, []);


  return (
      <Layout.Sider collapsible collapsed={collapsed}
                    onCollapse={(newValue) => setCollapsed(newValue)}>
        <div className="logo">
          <Link to={homePageRoute}>
            <Image width={50} src="logo.png" preview={false}/>
          </Link>
        </div>
        <Menu items={items} mode="inline" theme="dark" onSelect={onSelected} onClick={onClicked}/>
      </Layout.Sider>
  );
}

export default LayoutSider;