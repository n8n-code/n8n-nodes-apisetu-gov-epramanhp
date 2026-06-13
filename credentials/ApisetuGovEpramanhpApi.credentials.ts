import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovEpramanhpApi implements ICredentialType {
        name = 'N8nDevApisetuGovEpramanhpApi';

        displayName = 'Apisetu Gov Epramanhp API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovEpramanhp/apisetu-gov-epramanhp.svg', dark: 'file:../nodes/ApisetuGovEpramanhp/apisetu-gov-epramanhp.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/epramanhp/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/epramanhp/v3',
                        description: 'The base URL of your Apisetu Gov Epramanhp API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
