/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import request from '@/utils/request';

export const checkConfigFileExists = () => {
  return request.post('/installation/config-file/check');
};

export const dbCheck = (params) => {
  return request.post('/installation/db/check', params);
};

export const installInit = (params) => {
  return request.post('/installation/init', params);
};

export const installBaseInfo = (params) => {
  return request.post('/installation/base-info', params);
};

export const getInstallLangOptions = () => {
  return request.get('/installation/language/options');
};

export const getInstallLanguageConfig = (lang: string) => {
  return request.get(`/installation/language/config?lang=${lang}`);
};
