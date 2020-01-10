import { insert, updateById, deleteById, selectById, select } from './execute';
import config from './config';

export function initSSQL(options) {
    if (!options.mysql) {
        throw Error('mysql not null.');
    }
    global.config = Object.assign(config, options);
}

export { insert, updateById, deleteById, selectById, select };