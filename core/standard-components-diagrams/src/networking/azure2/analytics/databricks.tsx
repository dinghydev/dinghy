import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATABRICKS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Azure_Databricks.svg;strokeColor=none;',
  },
  _original_width: 62.8,
  _original_height: 68,
}

export function Databricks(props: DiagramNodeProps) {
  return (
    <Shape {...DATABRICKS} {...props} _style={extendStyle(DATABRICKS, props)} />
  )
}
