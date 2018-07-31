function main () {
	var init_preps = {
		initContainer: function () {
			this.iscroll = new Iscroll('#js-wrapper', {
				scrollX: true,
				freeScroll: true,
				mouseWheel: true,
				probeType: 3
			});
		},
	};
};