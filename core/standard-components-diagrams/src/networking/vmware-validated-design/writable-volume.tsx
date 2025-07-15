import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WRITABLE_VOLUME = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.writable_volume;',
  _width: 50,
  _height: 40.5,
}

export function WritableVolume(props: DiagramNodeProps) {
  return <Shape {...WRITABLE_VOLUME} {...props} />
}
