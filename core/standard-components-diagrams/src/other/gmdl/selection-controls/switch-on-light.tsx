import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWITCH_ON_LIGHT = {
  _style:
    'dashed=0;labelPosition=right;align=left;shape=mxgraph.gmdl.switch;aspect=fixed;switchState=on;strokeColor=none;fillColor=#0E9D57;sketch=0;html=1;',
  _width: 0,
  _height: 20,
}

export function SwitchOnLight(props: DiagramNodeProps) {
  return <Shape {...SWITCH_ON_LIGHT} {...props} />
}
