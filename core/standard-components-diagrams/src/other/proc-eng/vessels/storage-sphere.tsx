import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORAGE_SPHERE = {
  _style:
    'shape=mxgraph.pid.vessels.storage_sphere;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 80,
  _height: 100,
}

export function StorageSphere(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORAGE_SPHERE}
      {...props}
      _style={extendStyle(STORAGE_SPHERE, props)}
    />
  )
}
