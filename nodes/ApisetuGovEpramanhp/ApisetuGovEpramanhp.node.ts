import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovEpramanhp implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Apisetu Gov Epramanhp',
                name: 'N8nDevApisetuGovEpramanhp',
                icon: { light: 'file:./apisetu-gov-epramanhp.svg', dark: 'file:./apisetu-gov-epramanhp.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Lok Praman Patra (http://admis.hp.nic.in/epraman/) is HP Govt\'s online service portal issuing documents like Bonafide, Dogra Class, Income, Character Certificates.',
                defaults: { name: 'Apisetu Gov Epramanhp' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevApisetuGovEpramanhpApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
                ],
        };
}
