#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { AwsCdkWorkshopTsStack } from '../lib/aws-cdk-workshop-ts-stack';

const app = new cdk.App();
new AwsCdkWorkshopTsStack(app, 'AwsCdkWorkshopTsStack');
