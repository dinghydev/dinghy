import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WINDOWS_DOMAIN = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/windows_domain.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 42.5,
}

export function WindowsDomain(props: DiagramNodeProps) {
  return (
    <Shape
      {...WINDOWS_DOMAIN}
      {...props}
      _style={extendStyle(WINDOWS_DOMAIN, props)}
    />
  )
}
