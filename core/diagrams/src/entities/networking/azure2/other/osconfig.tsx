import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OSCONFIG = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/OSConfig.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 56.68,
}

export function Osconfig(props: DiagramNodeProps) {
  return (
    <Shape {...OSCONFIG} {...props} _style={extendStyle(OSCONFIG, props)} />
  )
}
