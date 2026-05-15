<?php
declare(strict_types=1);

// Fastapi SDK utility: prepare_body

class FastapiPrepareBody
{
    public static function call(FastapiContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
