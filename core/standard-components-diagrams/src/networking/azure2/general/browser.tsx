import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BROWSER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Browser.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 52,
}

export function Browser(props: DiagramNodeProps) {
  return <Shape {...BROWSER} {...props} _style={extendStyle(BROWSER, props)} />
}
