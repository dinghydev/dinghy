import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GLACIER_DEEP_ARCHIVE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.glacier_deep_archive;',
  },
  _original_width: 75,
  _original_height: 78,
}

export function GlacierDeepArchive(props: DiagramNodeProps) {
  return (
    <Shape
      {...GLACIER_DEEP_ARCHIVE}
      {...props}
      _style={extendStyle(GLACIER_DEEP_ARCHIVE, props)}
    />
  )
}
