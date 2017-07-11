// imports
import {  getLocation,
          getSettings,
          setThemeSettings,
          setCustomTheme,
          setMicInputSettings,
          setEnterAsSendSettings,
          setSpeechOutputSettings,
          createSUSIMessage } from './API.actions';

import {  getHistory } from './History.actions';

import {  createMessage,
          receiveCreatedMessage,
          clickThread,
          resetVoice,
          receiveAll } from './ChatApp.actions';

import {  serverChanged,
          ToggleSearch,
          initialiseSettings,
          enterAsSendChanged,
          micInputChanged,
          speechOutputChanged,
          themeChanged,
          customThemeAdded  } from './Settings.actions';

import {  connectToWebSocket,
          sendToHardwareDevice } from './HardwareConnect.actions';


// exports
export {  getLocation,
          getSettings,
          setThemeSettings,
          setCustomTheme,
          setMicInputSettings,
          setEnterAsSendSettings,
          setSpeechOutputSettings,
          createSUSIMessage }

export { getHistory }

export {  createMessage,
          receiveCreatedMessage,
          clickThread,
          resetVoice,
          receiveAll }

export { serverChanged,
         ToggleSearch,
         initialiseSettings,
         enterAsSendChanged,
         micInputChanged,
         speechOutputChanged,
         themeChanged,
         customThemeAdded }

export { connectToWebSocket, sendToHardwareDevice }
