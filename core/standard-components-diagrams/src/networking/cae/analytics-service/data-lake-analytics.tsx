import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_LAKE_ANALYTICS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Data_Lake_Analytics.svg;',
  _width: 50,
  _height: 50,
}

export function DataLakeAnalytics(props: DiagramNodeProps) {
  return <Shape {...DATA_LAKE_ANALYTICS} {...props} />
}
