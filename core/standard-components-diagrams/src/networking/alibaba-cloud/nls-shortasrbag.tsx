import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NLS_SHORTASRBAG = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nls-shortasrbag;',
  },
  _original_width: 47.400000000000006,
  _original_height: 47.400000000000006,
}

export function NlsShortasrbag(props: DiagramNodeProps) {
  return (
    <Shape
      {...NLS_SHORTASRBAG}
      {...props}
      _style={extendStyle(NLS_SHORTASRBAG, props)}
    />
  )
}
