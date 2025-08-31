import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABRICKS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Databricks.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 48,
}

export function Databricks(props: DiagramNodeProps) {
  return (
    <Shape {...DATABRICKS} {...props} _style={extendStyle(DATABRICKS, props)} />
  )
}
