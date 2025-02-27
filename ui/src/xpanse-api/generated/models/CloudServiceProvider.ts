/*
 * SPDX-License-Identifier: Apache-2.0
 * SPDX-FileCopyrightText: Huawei Inc.
 */

/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The cloud service provider of the managed service
 */
export class CloudServiceProvider {
  /**
   * The Cloud Service Provider. valid values: aws, azure, alibaba, huawei
   */
  'name': CloudServiceProviderNameEnum;
  /**
   * The regions of the Cloud Service Provider
   */
  'regions': Array<string>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{ name: string, baseName: string, type: string, format: string }> = [
    {
      'name': 'name',
      'baseName': 'name',
      'type': 'CloudServiceProviderNameEnum',
      'format': ''
    },
    {
      'name': 'regions',
      'baseName': 'regions',
      'type': 'Array<string>',
      'format': ''
    }];

  static getAttributeTypeMap() {
    return CloudServiceProvider.attributeTypeMap;
  }

  public constructor() {
  }
}


export type CloudServiceProviderNameEnum = 'aws' | 'azure' | 'alibaba' | 'huawei';

