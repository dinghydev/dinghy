import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GLOBAL_SERVER = {
  _style:
    'fillColorStyles=neutralFill;neutralFill=#9DA6A8;shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.global_server;network2IconW=1;network2IconH=1;',
  _width: 50,
  _height: 50,
}

export function GlobalServer(props: DiagramNodeProps) {
  return <Shape {...GLOBAL_SERVER} {...props} />
}
