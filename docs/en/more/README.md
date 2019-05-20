# More

### :tada: Thanks to [Google Translate](https://translate.google.cn/) and [Baidu Encyclopedia](https://baike.baidu.com/) for its powerful output.

| Attribute | Type | Default | Must | Description |
|:------------- |:-------------|:-----|:-----|:-----|
| text | string | - | Yes | text content |
| format | string | "YYYY-MM-DD" | No | date format |
| disabled | boolean | false | No | whether to disable |

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

[Doing good deeds without asking for reward](https://github.com/xhsdnn)

![mountain](../../.vuepress/public/images/mountain.jpeg)

> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis natus vitae explicabo, fugiat quod odio! Laudantium illum eaque reiciendis beatae debitis delectus omnis molestiae voluptate, asperiores in non accusantium.
