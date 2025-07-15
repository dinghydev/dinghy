import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABRICKS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Azure_Databricks.svg;',
  _width: 62.8,
  _height: 68,
}

export function Databricks(props: DiagramNodeProps) {
  return <Shape {...DATABRICKS} {...props} />
}
