

<!-- 缓存器的使用 -->
使用方法
name以下划线_开头命名的缓存到Storage，并且Map也有副本

事件名	参数	说明	返回值
set	name缓存的key,data缓存的数据,timeout(必须数字单位s)缓存时间，默认缓存1200s, timeout设置为0表示永久缓存	设置缓存数据	Map集合
get	name缓存的key	获取数据(缓存过期将返回null)	返回缓存的数据data
has	name缓存的key	检查值	true/false
delete	name缓存的key	删除数据	true/false
clear	-	清空Storage和Map缓存数据	true/false





// 'name'不是以下划线开头的表示会缓存到Map中，在程序生命周期内有并且在有效时间内有效
this.$cache.set('name', 'MinCache')

// 过期时间设置为0表示不会过期
// 注意：'test'并不是以下划线命名表示在程序生命周期永久缓存
this.$cache.set('test', 'testdemo', 0)

// 过期时间设置为0表示不会过期
// 注意：'_imgURL'是以下划线命名表示永久缓存到Storage
this.$cache.set('_imgURL', 'data', 0)



// 获取缓存的数据
this.imgURL = this.$cache.get('_imgURL')
this.name = this.$cache.get('name')
this.test = this.$cache.get('test')