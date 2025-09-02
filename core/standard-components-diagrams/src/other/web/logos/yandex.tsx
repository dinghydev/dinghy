import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const YANDEX = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.yandex',
  },
  _original_width: 31.8,
  _original_height: 66.4,
}

export function Yandex(props: DiagramNodeProps) {
  return <Shape {...YANDEX} {...props} _style={extendStyle(YANDEX, props)} />
}
