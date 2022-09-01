import {MikroORM} from '@mikro-orm/core';

(async () => {
    const orm = await MikroORM.init({
        discovery: {
            // we need to disable validation for no entities
            warnWhenNoEntities: false,
        },
        dbName: 'tft_lms',
        type: 'postgresql',
        user: 'postgres',
        password: '1234'
        // ...
    });
    const generator = orm.getEntityGenerator();
    const dump = await generator.generate({
        save: true,
        baseDir: process.cwd() + '/my-entities',
    });
    console.log(dump);
    await orm.close(true);
})();