import type { INodeProperties } from 'n8n-workflow';

export const apIsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					]
				}
			},
			"options": [
				{
					"name": "Agcer",
					"value": "Agcer",
					"action": "Agriculture/ Agriculturist Certificate",
					"description": "API to verify Agriculture/ Agriculturist Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/agcer/certificate"
						}
					}
				},
				{
					"name": "Bacer",
					"value": "Bacer",
					"action": "Backward Area Certificate",
					"description": "API to verify Backward Area Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/bacer/certificate"
						}
					}
				},
				{
					"name": "Bhcer",
					"value": "Bhcer",
					"action": "Bonafide Certificate",
					"description": "API to verify Bonafide Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/bhcer/certificate"
						}
					}
				},
				{
					"name": "Chcer",
					"value": "Chcer",
					"action": "Character Certificate",
					"description": "API to verify Character Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chcer/certificate"
						}
					}
				},
				{
					"name": "Dccer",
					"value": "Dccer",
					"action": "Dogra Class Certificate",
					"description": "API to verify Dogra Class Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dccer/certificate"
						}
					}
				},
				{
					"name": "Ffcer",
					"value": "Ffcer",
					"action": "Freedom Fighter Certificate",
					"description": "API to verify Freedom Fighter Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/ffcer/certificate"
						}
					}
				},
				{
					"name": "Incer",
					"value": "Incer",
					"action": "Income Certificate",
					"description": "API to verify Income Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/incer/certificate"
						}
					}
				},
				{
					"name": "Lhcer",
					"value": "Lhcer",
					"action": "Legal Heir Certificate",
					"description": "API to verify Legal Heir Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/lhcer/certificate"
						}
					}
				},
				{
					"name": "Mncer",
					"value": "Mncer",
					"action": "Minority Certificate",
					"description": "API to verify Minority Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/mncer/certificate"
						}
					}
				},
				{
					"name": "Obcer",
					"value": "Obcer",
					"action": "OBC Certificate",
					"description": "API to verify OBC Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/obcer/certificate"
						}
					}
				},
				{
					"name": "Psprt",
					"value": "Psprt",
					"action": "Passport/ Passport Verification",
					"description": "API to verify Passport/ Passport Verification.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/psprt/certificate"
						}
					}
				},
				{
					"name": "Racer",
					"value": "Racer",
					"action": "Rural Area Certificate",
					"description": "API to verify Rural Area Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/racer/certificate"
						}
					}
				},
				{
					"name": "Rmcer",
					"value": "Rmcer",
					"action": "Marriage Certificate",
					"description": "API to verify Marriage Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/rmcer/certificate"
						}
					}
				},
				{
					"name": "Shcer",
					"value": "Shcer",
					"action": "SC/ST  Certificate",
					"description": "API to verify SC/ST  Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shcer/certificate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /agcer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Agcer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"Name\": \"4 Characters of Name\",\n  \"RefNo\": \"XXXX/XX/2017\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Agcer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Agcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Agcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Agcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Agcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Agcer"
					]
				}
			}
		},
		{
			"displayName": "POST /bacer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Bacer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"Name\": \"4 Characters of Name\",\n  \"RefNo\": \"XXXX/XX/2017\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Bacer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Bacer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Bacer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Bacer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Bacer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Bacer"
					]
				}
			}
		},
		{
			"displayName": "POST /bhcer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Bhcer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"Name\": \"4 Characters of Name\",\n  \"RefNo\": \"XXXX/XX/2017\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Bhcer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Bhcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Bhcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Bhcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Bhcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Bhcer"
					]
				}
			}
		},
		{
			"displayName": "POST /chcer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Chcer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"Name\": \"4 Characters of Name\",\n  \"RefNo\": \"XXXX/XX/2017\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Chcer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Chcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Chcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Chcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Chcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Chcer"
					]
				}
			}
		},
		{
			"displayName": "POST /dccer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Dccer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"Name\": \"4 Characters of Name\",\n  \"RefNo\": \"XXXX/XX/2017\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Dccer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Dccer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Dccer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Dccer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Dccer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Dccer"
					]
				}
			}
		},
		{
			"displayName": "POST /ffcer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Ffcer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"Name\": \"4 Characters of Name\",\n  \"RefNo\": \"XXXX/XX/2017\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Ffcer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Ffcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Ffcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Ffcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Ffcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Ffcer"
					]
				}
			}
		},
		{
			"displayName": "POST /incer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Incer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"Name\": \"4 Characters of Name\",\n  \"RefNo\": \"XXXX/XX/2017\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Incer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Incer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Incer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Incer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Incer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Incer"
					]
				}
			}
		},
		{
			"displayName": "POST /lhcer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Lhcer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"Name\": \"4 Characters of Name\",\n  \"RefNo\": \"XXXX/XX/2017\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Lhcer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Lhcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Lhcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Lhcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Lhcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Lhcer"
					]
				}
			}
		},
		{
			"displayName": "POST /mncer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Mncer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"Name\": \"4 Characters of Name\",\n  \"RefNo\": \"XXXX/XX/2017\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Mncer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Mncer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Mncer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Mncer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Mncer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Mncer"
					]
				}
			}
		},
		{
			"displayName": "POST /obcer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Obcer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"Name\": \"4 Characters of Name\",\n  \"RefNo\": \"XXXX/XX/2017\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Obcer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Obcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Obcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Obcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Obcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Obcer"
					]
				}
			}
		},
		{
			"displayName": "POST /psprt/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Psprt"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"Name\": \"4 Characters of Name\",\n  \"RefNo\": \"XXXX/XX/2017\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Psprt"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Psprt"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Psprt"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Psprt"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Psprt"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Psprt"
					]
				}
			}
		},
		{
			"displayName": "POST /racer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Racer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"Name\": \"4 Characters of Name\",\n  \"RefNo\": \"XXXX/XX/2017\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Racer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Racer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Racer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Racer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Racer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Racer"
					]
				}
			}
		},
		{
			"displayName": "POST /rmcer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Rmcer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"Name\": \"4 Characters of Name\",\n  \"RefNo\": \"XXXX/XX/2017\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Rmcer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Rmcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Rmcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Rmcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Rmcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Rmcer"
					]
				}
			}
		},
		{
			"displayName": "POST /shcer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Shcer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"Name\": \"4 Characters of Name\",\n  \"RefNo\": \"XXXX/XX/2017\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Shcer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Shcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Shcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Shcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Shcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Shcer"
					]
				}
			}
		},
];
