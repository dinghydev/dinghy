import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const THIN_CLIENT = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.thin_client;',
  _width: 36.565,
  _height: 50,
}

export function ThinClient(props: DiagramNodeProps) {
  return <Shape {...THIN_CLIENT} {...props} />
}
