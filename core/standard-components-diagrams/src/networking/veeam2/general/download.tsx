import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOWNLOAD = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.download;',
  _width: 28.000000000000004,
  _height: 28.000000000000004,
}

export function Download(props: DiagramNodeProps) {
  return <Shape {...DOWNLOAD} {...props} />
}
