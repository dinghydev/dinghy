import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABRICKS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Azure_Databricks.svg;strokeColor=none;',
  },
  _width: 62.8,
  _height: 68,
}

export function Databricks(props: DiagramNodeProps) {
  return (
    <Shape {...DATABRICKS} {...props} _style={extendStyle(DATABRICKS, props)} />
  )
}
