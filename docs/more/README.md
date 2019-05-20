# 更多内容

### :tada: 感谢[谷歌翻译](https://translate.google.cn/)以及[百度百科](https://baike.baidu.com/)的强力输出。

|属性|类型|默认值|必填|说明|
|:------------- |:-------------|:-----|:-----|:-----|
| text | string | - | 是 | 文本内容 |
| format | string | "YYYY-MM-DD" | 否 | 日期格式 |
| disabled | boolean | false | 否 | 是否禁用 |


::: tip
This is a tip
:::

``` js{2}
function clearRepeat(str) {
	let regex = /(.)?/g;
	return str.replace(regex, function($1, $2, $3, $4) {
		return $4.indexOf($2) === $3 ? $2 : '';
	});
}
```

[但行好事 莫问前程](https://github.com/xhsdnn)

![山](../.vuepress/public/images/mountain.jpeg)

> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis natus vitae explicabo, fugiat quod odio! Laudantium illum eaque reiciendis beatae debitis delectus omnis molestiae voluptate, asperiores in non accusantium.
