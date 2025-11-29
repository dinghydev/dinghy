import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TIME_SERIES_DATA_SETS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/preview/Time_Series_Data_Sets.svg;strokeColor=none;',
  },
  _original_width: 48,
  _original_height: 64,
}

export function TimeSeriesDataSets(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TIME_SERIES_DATA_SETS)} />
}
