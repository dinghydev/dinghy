import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROGRAMMABLE_LOGIC_CONTROL_INACCESSIBLE = {
  _style:
    'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.progLogCont;mounting=inaccessible',
  _width: 60,
  _height: 60,
}

export function ProgrammableLogicControlInaccessible(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROGRAMMABLE_LOGIC_CONTROL_INACCESSIBLE}
      {...props}
      _style={extendStyle(PROGRAMMABLE_LOGIC_CONTROL_INACCESSIBLE, props)}
    />
  )
}
