import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLUG_AND_PLAY = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.plug_and_play',
  },
  _width: 40,
  _height: 50,
}

export function PlugAndPlay(props: DiagramNodeProps) {
  return (
    <Shape
      {...PLUG_AND_PLAY}
      {...props}
      _style={extendStyle(PLUG_AND_PLAY, props)}
    />
  )
}
