import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPRESSOR_AND_SILENCERS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.compressors.compressor_and_silencers;pointerEvents=1',
  },
  _width: 90,
  _height: 80,
}

export function CompressorAndSilencers(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPRESSOR_AND_SILENCERS}
      {...props}
      _style={extendStyle(COMPRESSOR_AND_SILENCERS, props)}
    />
  )
}
