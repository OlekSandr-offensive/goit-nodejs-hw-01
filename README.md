# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
https://monosnap.com/file/NVm2b1Bq1stl82J91t25f1zcxBOEsL

# Получаем контакт по id
node index.js --action get --id 5
https://monosnap.com/file/UrLijwOjVsrJrE6Zx0sJcNI3ZprJTH

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/p6PM72HnnaLE2uzOxpnuJnu1nKjrMn

# Удаляем контакт
node index.js --action remove --id=3
https://monosnap.com/file/aliZFfn7cqeggdEbWQHczOKeR6xbfP
