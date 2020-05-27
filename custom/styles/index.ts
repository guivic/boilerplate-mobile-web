import jss from 'jss';
import camelCase from 'jss-plugin-camel-case';
import global from 'jss-plugin-global';

jss.use(camelCase(), global());

export { Sheets, SheetsId } from './sheets';
export { globalStyles } from './global';