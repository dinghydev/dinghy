import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATABASE_SYNCHRONIZATION = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.database_synchronization',
  _width: 39,
  _height: 50,
}

export function DatabaseSynchronization(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATABASE_SYNCHRONIZATION}
      {...props}
      _style={extendStyle(DATABASE_SYNCHRONIZATION, props)}
    />
  )
}
