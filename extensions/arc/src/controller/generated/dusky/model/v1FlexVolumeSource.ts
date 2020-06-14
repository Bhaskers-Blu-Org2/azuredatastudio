/**
 * Dusky API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1LocalObjectReference } from './v1LocalObjectReference';

export class V1FlexVolumeSource {
    'driver'?: string;
    'fsType'?: string;
    'options'?: { [key: string]: string; };
    'readOnly'?: boolean | null;
    'secretRef'?: V1LocalObjectReference;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "driver",
            "baseName": "driver",
            "type": "string"
        },
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "V1LocalObjectReference"
        }    ];

    static getAttributeTypeMap() {
        return V1FlexVolumeSource.attributeTypeMap;
    }
}

