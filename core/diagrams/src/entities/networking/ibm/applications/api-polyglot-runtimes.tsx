import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const API_POLYGLOT_RUNTIMES = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/applications/api_polyglot_runtimes.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function ApiPolyglotRuntimes(props: NodeProps) {
  return (
    <Shape
      {...API_POLYGLOT_RUNTIMES}
      {...props}
      _style={extendStyle(API_POLYGLOT_RUNTIMES, props)}
    />
  )
}
