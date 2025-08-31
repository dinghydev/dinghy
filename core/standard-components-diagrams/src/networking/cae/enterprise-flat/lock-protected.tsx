import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCK_PROTECTED = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.lock',
  _width: 39,
  _height: 50,
}

export function LockProtected(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOCK_PROTECTED}
      {...props}
      _style={extendStyle(LOCK_PROTECTED, props)}
    />
  )
}
