import { SheetsRegistry, createGenerateId } from 'react-jss';
import { Rule, StyleSheet } from 'jss';

export const Sheets = new SheetsRegistry();
export const SheetsId = (rule: Rule, sheet: StyleSheet<string>) => `${rule.key}-${sheet.options.classNamePrefix}`;