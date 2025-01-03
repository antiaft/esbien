import { useIntl as useInnerIntl } from 'react-intl'
import type { IntlMessageKeys } from '@components/FormattedMessage/FormattedMessage'
import type { ReactNode } from 'react'

type FormatFunction = (
  opts: {
    id: IntlMessageKeys
    defaultMessage?: string
    description?: string
  },
  values: Record<string, ReactNode>
) => Array<ReactNode>

export function useFormattedMessage(): FormatFunction {
  const intl = useInnerIntl()

  return (opts, values) => intl.formatMessage(opts, values)
}
