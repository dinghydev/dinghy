import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TIME_SERIES_DATA_SETS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Time_Series_Data_Sets.svg;strokeColor=none;',
  },
  _original_width: 51.2,
  _original_height: 68,
}

export function TimeSeriesDataSets(props: NodeProps) {
  return (
    <Shape
      {...TIME_SERIES_DATA_SETS}
      {...props}
      _style={extendStyle(TIME_SERIES_DATA_SETS, props)}
    />
  )
}
