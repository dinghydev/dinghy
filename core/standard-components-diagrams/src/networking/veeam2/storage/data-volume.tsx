import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_VOLUME = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.data_volume;',
  _width: 40,
  _height: 11,
}

export function DataVolume(props: DiagramNodeProps) {
  return <Shape {...DATA_VOLUME} {...props} />
}
