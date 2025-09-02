import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LAYOUT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Layout.svg;strokeColor=none;',
  },
  _original_width: 60.760000000000005,
  _original_height: 68,
}

export function Layout(props: DiagramNodeProps) {
  return <Shape {...LAYOUT} {...props} _style={extendStyle(LAYOUT, props)} />
}
