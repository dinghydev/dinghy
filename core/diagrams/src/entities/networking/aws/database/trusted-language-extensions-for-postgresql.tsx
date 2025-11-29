import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRUSTED_LANGUAGE_EXTENSIONS_FOR_POSTGRESQL = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.rds_trusted_language_extensions_for_postgresql;',
  },
  _original_width: 59,
  _original_height: 78,
}

export function TrustedLanguageExtensionsForPostgresql(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, TRUSTED_LANGUAGE_EXTENSIONS_FOR_POSTGRESQL)}
    />
  )
}
