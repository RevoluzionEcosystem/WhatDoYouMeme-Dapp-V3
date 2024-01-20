"use client"

import { useEffect, useRef } from "react"
import { ChartingLibraryWidgetOptions, LanguageCode, ResolutionString, widget } from "../../../../public/static/charting_library"
import datafeed from "./datafeed"

interface TVChartContainerProps extends Partial<ChartingLibraryWidgetOptions> {
	network: string
	address: string
}

export const TVChartContainer = (props: TVChartContainerProps) => {
	const chartContainerRef =
		useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>

	useEffect(() => {
		const widgetOptions: ChartingLibraryWidgetOptions = {
			symbol: props.symbol,
			datafeed: datafeed,
			interval: props.interval as ResolutionString,
			container: chartContainerRef.current,
			library_path: props.library_path,
			locale: props.locale as LanguageCode,
			disabled_features: ["header_compare", "header_symbol_search", "use_localstorage_for_settings"],
			enabled_features: ["hide_resolution_in_legend", "study_templates"],
			fullscreen: props.fullscreen,
			autosize: props.autosize,
			theme: "dark"
		}

		const tvWidget = new widget(widgetOptions)

		return () => {
			tvWidget.remove()
		}
	}, [props, datafeed])

	return (
		<div ref={chartContainerRef} className="h-[600px]" />
	)
}