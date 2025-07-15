import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VOLUME_SLIDER = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.misc.volumeSlider;barPos=80;fillColor=#cccccc;strokeColor=#999999;fillColor2=#ddeeff;',
  _width: 250,
  _height: 30,
}

export function VolumeSlider(props: DiagramNodeProps) {
  return <Shape {...VOLUME_SLIDER} {...props} />
}
