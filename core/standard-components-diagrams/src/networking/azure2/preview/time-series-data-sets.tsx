import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TIME_SERIES_DATA_SETS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/preview/Time_Series_Data_Sets.svg;strokeColor=none;',
  _width: 48,
  _height: 64,
}

export function TimeSeriesDataSets(props: DiagramNodeProps) {
  return (
    <Shape
      {...TIME_SERIES_DATA_SETS}
      {...props}
      _style={extendStyle(TIME_SERIES_DATA_SETS, props)}
    />
  )
}
